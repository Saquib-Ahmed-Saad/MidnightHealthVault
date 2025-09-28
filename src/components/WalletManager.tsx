"use client";

import { useEffect, useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";

// NOTE: This is a headless mock of the Midnight wallet integration for MVP UI.
// Replace connect/disconnect/balance with @midnight-ntwrk/wallet when wiring real SDK.

export default function WalletManager() {
  const [connected, setConnected] = useState(false);
  const [address, setAddress] = useState<string | null>(null);
  const [balance, setBalance] = useState<number>(0);
  const [seed, setSeed] = useState("");

  useEffect(() => {
    if (connected && !address) {
      const mock = "addr_test1qpmockhealthvault000" + Math.floor(Math.random() * 1000);
      setAddress(mock);
      setBalance(12.34); // mock tDUST
    }
  }, [connected, address]);

  const short = useMemo(() => (address ? address.slice(0, 12) + "…" + address.slice(-6) : "-"), [address]);

  return (
    <section id="wallet" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <Card>
        <CardHeader>
          <CardTitle>Wallet</CardTitle>
          <CardDescription>Connect to your Midnight wallet (Lace or headless). For now this is a demo flow.</CardDescription>
        </CardHeader>
        <CardContent className="grid gap-6 md:grid-cols-2">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Button onClick={() => setConnected(true)} disabled={connected}>Connect</Button>
              <Button variant="secondary" onClick={() => { setConnected(false); setAddress(null); setBalance(0); }}>Disconnect</Button>
            </div>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div className="rounded-lg border p-3">
                <div className="text-muted-foreground">Status</div>
                <div className="mt-1 font-medium">{connected ? "Connected" : "Disconnected"}</div>
              </div>
              <div className="rounded-lg border p-3">
                <div className="text-muted-foreground">Balance</div>
                <div className="mt-1 font-medium">{connected ? balance.toFixed(2) + " tDUST" : "-"}</div>
              </div>
              <div className="rounded-lg border p-3 col-span-2">
                <div className="text-muted-foreground">Address</div>
                <div className="mt-1 font-mono text-xs">{connected ? short : "-"}</div>
              </div>
            </div>
            <p className="text-xs text-muted-foreground">Tip: Top up this wallet from Lace using tDUST faucets. When wiring the real SDK, balance will reflect on Testnet.</p>
          </div>
          <div className="space-y-4">
            <Label htmlFor="seed">Seed phrase</Label>
            <Input id="seed" placeholder="generate or paste 12/24 words" value={seed} onChange={(e) => setSeed(e.target.value)} />
            <div className="flex gap-2">
              <Button variant="outline" onClick={() => setSeed("oak secret broom snack galaxy velvet salmon pony cave swallow smile hammer")}>Generate Mock</Button>
              <Button variant="secondary" onClick={() => setSeed("")}>Clear</Button>
            </div>
            <Separator />
            <div className="text-xs text-muted-foreground">
              We never send your seed phrase anywhere. Replace this box with secure wallet APIs when integrating.
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
}