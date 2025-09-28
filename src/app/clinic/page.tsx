import { ClinicPortal } from "@/components/ClinicPortal";
import NavBar from "@/components/NavBar";

export default function ClinicPage() {
  return (
    <div className="min-h-screen">
      <NavBar />
      <ClinicPortal />
    </div>
  );
}