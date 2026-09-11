import Strategy from "@/components/investment/Strategy";
import Field from "@/components/investment/Field";
import Stage from "@/components/investment/Stage";
import Criteria from "@/components/investment/Criteria";
import Process from "@/components/investment/Process";

export default function Investment() {
  return (
    <section id="investment" className="section-offset">
      <Strategy />
      <Field />
      <Stage />
      <Criteria />
      <Process />
    </section>
  );
}
