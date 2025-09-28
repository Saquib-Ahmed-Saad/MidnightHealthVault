"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function ContractSection() {
  const [contract, setContract] = useState<string>("");
  const [deploying, setDeploying] = useState(false);

  async function deploy() {
    setDeploying(true);
    // TODO: Wire to deploy-contract.ts via API route or SDK call.
    await new Promise((r) => setTimeout(r, 900));
    const addr = "hvctrt_test1q" + Math.random().toString(36).slice(2, 10);
    setContract(addr);
    setDeploying(false);
  }

  return (
    <section id="contract" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <Card>
        <CardHeader>
          <CardTitle>Contract</CardTitle>
          <CardDescription>Deploy a new HealthVault contract to Midnight Testnet or join an existing one.</CardDescription>
        </CardHeader>
        <CardContent className="grid gap-6 md:grid-cols-2">
          <div className="space-y-4">
            <Button onClick={deploy} disabled={deploying}>{deploying ? "Deploying…" : "Deploy new contract"}</Button>
            <div className="text-sm">
              <div className="text-muted-foreground">Deployed address</div>
              <div className="font-mono mt-1">{contract || "—"}</div>
            </div>
          </div>
          <div className="space-y-3">
            <Label htmlFor="existing">Join existing</Label>
            <Input id="existing" placeholder="paste contract address" onChange={(e) => setContract(e.target.value)} />
            <Button variant="secondary" disabled={!contract}>Set active</Button>
            <p className="text-xs text-muted-foreground">Contract bindings compiled at /output/contract/index.cjs. Hook this UI to your API that talks to the Proof Server.</p>
          </div>
        </CardContent>
      </Card>
    </section>
  );
}