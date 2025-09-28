"use client";

export default function Testimonials() {
  const items = [
    {
      name: "City Health Clinic",
      role: "Partner",
      quote: "HealthVault streamlines patient consent with privacy by default.",
    },
    { name: "Dr. Rivera", role: "Cardiologist", quote: "Signing records takes seconds and patients stay in control." },
    { name: "Nurse Patel", role: "RN", quote: "Finally, a workflow that respects confidentiality." },
  ];
  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="rounded-2xl border bg-card p-6 md:p-10">
        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-center">Loved by clinicians and builders</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {items.map((t) => (
            <figure key={t.name} className="rounded-xl border bg-background p-6">
              <blockquote className="text-sm text-muted-foreground">“{t.quote}”</blockquote>
              <figcaption className="mt-4 text-sm">
                <div className="font-medium">{t.name}</div>
                <div className="text-muted-foreground">{t.role}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}