"use client";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export default function FAQ() {
  return (
    <section id="faq" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl">
        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">Frequently Asked Questions</h2>
        <p className="text-muted-foreground mt-2">Everything you need to know about HealthVault and privacy on Midnight.</p>
        <div className="mt-6 rounded-xl border bg-card p-2">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="types-of-data">
              <AccordionTrigger>What data goes on-chain?</AccordionTrigger>
              <AccordionContent>
                Only commitments and proofs. Sensitive fields never leave your device unencrypted.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="wallets">
              <AccordionTrigger>Which wallets are supported?</AccordionTrigger>
              <AccordionContent>
                Lace and headless SDK wallets during Testnet. Mainnet support will expand.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="doctors">
              <AccordionTrigger>How do doctors sign records?</AccordionTrigger>
              <AccordionContent>
                Use the clinic signing tool to produce signatures included with submissions.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  );
}