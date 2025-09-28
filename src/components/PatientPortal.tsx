"use client";

import { useMemo, useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

type ImportedSigned = {
  clinicName: string;
  patientId: string;
  recordType: string;
  details: string;
  commitmentHex: string;
  sigHex: string;
  createdAt: number;
};

type Stored = {
  id: string; // tx hash-ish
  fromClinic: string;
  createdAt: number;
};

export const PatientPortal = () => {
  const [connected, setConnected] = useState(false);
  const [address, setAddress] = useState<string | null>(null);
  const [balance, setBalance] = useState<string | null>(null);
  const [contractAddr, setContractAddr] = useState("");

  const [imported, setImported] = useState<ImportedSigned | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const [stored, setStored] = useState<Stored[]>([]);

  const isReadyToSubmit = useMemo(() => {
    return connected && !!imported && !!contractAddr && !submitting;
  }, [connected, imported, contractAddr, submitting]);

  const connectWallet = async () => {
    // Replace with real Lace or headless wallet connect.
    setConnected(true);
    // mock address + balance
    setAddress("addr_test1...abcd");
    setBalance("1,234 tDUST");
  };

  const onFileChange = async (file: File) => {
    try {
      const text = await file.text();
      const json = JSON.parse(text) as ImportedSigned;
      setImported(json);
    } catch (e) {
      // In real app, show toast
      setImported(null);
    }
  };

  const submitSigned = async () => {
    if (!imported) return;
    setSubmitting(true);
    // In real flow: call Proof Server → generate ZK proof → submit to contract on Midnight Testnet
    await new Promise((r) => setTimeout(r, 1200));
    const id = imported.commitmentHex.slice(0, 12);
    setStored((prev) => [{ id, fromClinic: imported.clinicName, createdAt: Date.now() }, ...prev]);
    setImported(null);
    setSubmitting(false);
  };

  return (
    <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      <Card>
        <CardHeader>
          <CardTitle>Patient Portal</CardTitle>
          <CardDescription>Connect a wallet, import a signed record from your clinic, and submit to Midnight Testnet.</CardDescription>
        </CardHeader>
        <CardContent className="grid gap-8 md:grid-cols-2">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Button onClick={connectWallet} disabled={connected}>{connected ? "Wallet Connected" : "Connect Wallet"}</Button>
              {connected && <Badge variant="secondary">tDUST: {balance ?? "—"}</Badge>}
            </div>
            {connected && (
              <div className="text-xs text-muted-foreground">Address: {address}</div>
            )}

            <div className="space-y-2">
              <Label htmlFor="contract">HealthVault contract address</Label>
              <Input id="contract" value={contractAddr} onChange={(e) => setContractAddr(e.target.value)} placeholder="contract_test1..." />
            </div>

            <div className="space-y-2">
              <Label htmlFor="signed">Import signed record (JSON)</Label>
              <Input id="signed" type="file" accept="application/json" onChange={(e) => {
                const f = e.target.files?.[0];
                if (f) onFileChange(f);
              }} />
              {imported && (
                <Textarea readOnly value={JSON.stringify(imported, null, 2)} className="h-40" />
              )}
            </div>

            <Button disabled={!isReadyToSubmit} onClick={submitSigned}>{submitting ? "Submitting…" : "Submit Signed Record"}</Button>
            <p className="text-xs text-muted-foreground">Signature is verified against trusted clinic keys in a real deployment.</p>
          </div>

          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="text-sm text-muted-foreground">Your records on chain</div>
              <Badge variant="secondary">{stored.length}</Badge>
            </div>
            <ul className="space-y-3">
              {stored.length === 0 && (
                <li className="text-sm text-muted-foreground">No records yet. Import a signed JSON from your clinic.</li>
              )}
              {stored.map((r) => (
                <li key={r.id} className="rounded-xl border bg-card p-4">
                  <div className="flex items-center justify-between">
                    <div className="font-medium">Record from {r.fromClinic}</div>
                    <Badge>Committed</Badge>
                  </div>
                  <div className="text-xs text-muted-foreground mt-1">{new Date(r.createdAt).toLocaleString()}</div>
                  <div className="text-xs mt-2 break-all">tx: <span className="text-muted-foreground">{r.id}…</span></div>
                </li>
              ))}
            </ul>
          </div>
        </CardContent>
      </Card>
    </main>
  );
};