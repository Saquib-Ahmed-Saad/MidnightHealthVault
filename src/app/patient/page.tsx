import { PatientPortal } from "@/components/PatientPortal";
import NavBar from "@/components/NavBar";

export default function PatientPage() {
  return (
    <div className="min-h-screen">
      <NavBar />
      <PatientPortal />
    </div>
  );
}