"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";

interface RecordItem { id: string; name: string; diagnosis: string; doctorSig: string; }

export default function RecordsSection() {
  const [items, setItems] = useState<RecordItem[]>([]);
  const [name, setName] = useState("");
  const [diag, setDiag] = useState("");
  const [sig, setSig] = useState("");
  const [submitting, setSubmitting] = useState(false);

  async function submit() {
    setSubmitting(true);
    // TODO: Replace with transaction via Proof Server + Midnight SDK.
    await new Promise((r) => setTimeout(r, 900));
    setItems((prev) => [{ id: crypto.randomUUID(), name, diagnosis: diag, doctorSig: sig }, ...prev]);
    setName(""); setDiag(""); setSig("");
    setSubmitting(false);
  }

  return (
    <section id="records" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <Card>
        <CardHeader>
          <CardTitle>Patient Records</CardTitle>
          <CardDescription>Submit shielded records. We show only commitments metadata for privacy.</CardDescription>
        </CardHeader>
        <CardContent className="grid gap-8 md:grid-cols-2">
          <div className="space-y-3">
            <Label htmlFor="name">Patient name</Label>
            <Input id="name" value={name} onChange={(e) => setName(e.target.value)} placeholder="Jane Doe" />
            <Label htmlFor="diag">Diagnosis</Label>
            <Textarea id="diag" value={diag} onChange={(e) => setDiag(e.target.value)} placeholder="e.g., seasonal allergies" />
            <Label htmlFor="sig">Doctor signature</Label>
            <Input id="sig" value={sig} onChange={(e) => setSig(e.target.value)} placeholder="hex-encoded signature" />
            <Button onClick={submit} disabled={submitting || !name || !diag || !sig}>{submitting ? "Submitting…" : "Add record"}</Button>
            <p className="text-xs text-muted-foreground">For demo, we store in memory and hide details in list. Replace with on-chain submission.</p>
          </div>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="text-sm text-muted-foreground">Total records</div>
              <Badge variant="secondary">{items.length}</Badge>
            </div>
            <ul className="space-y-3">
              {items.length === 0 && (
                <li className="text-sm text-muted-foreground">No records yet. Add your first one.</li>
              )}
              {items.map((it) => (
                <li key={it.id} className="rounded-xl border bg-card p-4">
                  <div className="flex items-center justify-between">
                    <div className="font-medium">Record stored successfully</div>
                    <Badge>Commitment</Badge>
                  </div>
                  <div className="text-xs text-muted-foreground mt-1">hash: {it.id.slice(0, 8)}…</div>
                </li>
              ))}
            </ul>
          </div>
        </CardContent>
      </Card>
    </section>
  );
}