"use client";

import { useMemo, useRef, useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

type IssuedRecord = {
  id: string; // pseudo commitment hash
  patientId: string;
  recordType: string;
  details: string;
  clinicName: string;
  commitmentHex: string;
  sigHex: string;
  createdAt: number;
};

export const ClinicPortal = () => {
  const [clinicName, setClinicName] = useState("");
  const [loginMethod, setLoginMethod] = useState<"wallet" | "key">("wallet");
  const [issuedKeyJson, setIssuedKeyJson] = useState<string>("");
  const [patientId, setPatientId] = useState("");
  const [recordType, setRecordType] = useState("");
  const [details, setDetails] = useState("");
  const [issuing, setIssuing] = useState(false);
  const [issued, setIssued] = useState<IssuedRecord[]>([]);

  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const canIssue = useMemo(() => {
    const hasCreds = loginMethod === "wallet" || (loginMethod === "key" && issuedKeyJson.trim().length > 0);
    return hasCreds && !!clinicName && !!patientId && !!recordType && !!details && !issuing;
  }, [clinicName, details, issuing, issuedKeyJson, loginMethod, patientId, recordType]);

  const handleKeyUpload = async (file: File) => {
    const text = await file.text();
    setIssuedKeyJson(text);
  };

  const randomHex = (len = 64) => Array.from(crypto.getRandomValues(new Uint8Array(len / 2)))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");

  const signAndIssue = async () => {
    setIssuing(true);
    // Simulate signing time
    await new Promise((r) => setTimeout(r, 900));

    // In real flow: use keys from /output/keys or connected wallet to sign a commitment for the record payload
    const commitmentHex = randomHex(64);
    const sigHex = randomHex(128);
    const id = commitmentHex.slice(0, 12);

    const item: IssuedRecord = {
      id,
      patientId,
      recordType,
      details,
      clinicName,
      commitmentHex,
      sigHex,
      createdAt: Date.now(),
    };

    setIssued((prev) => [item, ...prev]);
    setPatientId("");
    setRecordType("");
    setDetails("");
    setIssuing(false);

    // Offer JSON download so the patient can import to their portal
    const payload = {
      clinicName,
      patientId: item.patientId,
      recordType: item.recordType,
      details: item.details,
      commitmentHex: item.commitmentHex,
      sigHex: item.sigHex,
      createdAt: item.createdAt,
    };
    const blob = new Blob([JSON.stringify(payload, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `signed-record-${item.id}.json`;
    document.body.appendChild(a);
    a.click();
    a.remove();
    URL.revokeObjectURL(url);
  };

  return (
    <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      <Card>
        <CardHeader>
          <CardTitle>Clinic Portal</CardTitle>
          <CardDescription>Issue cryptographically signed records tied to your clinic identity.</CardDescription>
        </CardHeader>
        <CardContent className="grid gap-8 md:grid-cols-2">
          <div className="space-y-4">
            <div>
              <Label htmlFor="clinicName">Clinic name</Label>
              <Input id="clinicName" value={clinicName} onChange={(e) => setClinicName(e.target.value)} placeholder="Midnight Care Center" />
            </div>
            <div className="space-y-2">
              <Label>Login method</Label>
              <div className="flex gap-2">
                <Button variant={loginMethod === "wallet" ? "default" : "outline"} type="button" onClick={() => setLoginMethod("wallet")}>Wallet</Button>
                <Button variant={loginMethod === "key" ? "default" : "outline"} type="button" onClick={() => setLoginMethod("key")}>Issued key</Button>
              </div>
              {loginMethod === "key" && (
                <div className="space-y-2">
                  <Input ref={fileInputRef} type="file" accept="application/json" onChange={(e) => {
                    const f = e.target.files?.[0];
                    if (f) handleKeyUpload(f);
                  }} />
                  <p className="text-xs text-muted-foreground">Upload your clinic key JSON (kept locally in your browser).</p>
                </div>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="patientId">Patient identifier</Label>
              <Input id="patientId" value={patientId} onChange={(e) => setPatientId(e.target.value)} placeholder="wallet addr or DID" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="recordType">Record type</Label>
              <Input id="recordType" value={recordType} onChange={(e) => setRecordType(e.target.value)} placeholder="vaccine | diagnosis | prescription" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="details">Details (metadata)</Label>
              <Textarea id="details" value={details} onChange={(e) => setDetails(e.target.value)} placeholder="e.g., Influenza vaccine, batch #..." />
            </div>
            <Button disabled={!canIssue} onClick={signAndIssue}>{issuing ? "Signing…" : "Sign & Issue Record"}</Button>
            <p className="text-xs text-muted-foreground">This creates commitmentHex + sigHex. In production, it uses your private key and Midnight SDK.</p>
          </div>

          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="text-sm text-muted-foreground">Issued records</div>
              <Badge variant="secondary">{issued.length}</Badge>
            </div>
            <ul className="space-y-3">
              {issued.length === 0 && (
                <li className="text-sm text-muted-foreground">No records yet. Issue your first signed record.</li>
              )}
              {issued.map((r) => (
                <li key={r.id} className="rounded-xl border bg-card p-4">
                  <div className="flex items-center justify-between">
                    <div className="font-medium">Record for {r.patientId}</div>
                    <Badge>Signed</Badge>
                  </div>
                  <div className="text-xs text-muted-foreground mt-1">{r.recordType} • {new Date(r.createdAt).toLocaleString()}</div>
                  <div className="text-xs mt-2 break-all">
                    commitment: <span className="text-muted-foreground">{r.commitmentHex.slice(0, 18)}…</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </CardContent>
      </Card>
    </main>
  );
};