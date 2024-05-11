import OurServicesBox from "./OurServicesBox";
import { memo } from "react";

const OurServicesBoxsWrapper = memo(() => {
  return (
    <section className="flex items-center justify-center lg:justify-between gap-4 flex-wrap">
      <OurServicesBox
        icon="/images/png/services-money-back.png"
        title="money back"
        text="Refund in case of dissatisfaction"
      />
      <OurServicesBox
        icon="/images/png/services-gift.png"
        title="Send a gift"
        text="Send a gift with a purchase of $50"
      />
      <OurServicesBox
        icon="/images/png/services-badge.png"
        title="originality"
        text="All goods are guaranteed to be original"
      />
      <OurServicesBox
        icon="/images/png/services-truck.png"
        title="Instant delivery"
        text="Immediate delivery under 48 hours"
      />
    </section>
  );
});

export default OurServicesBoxsWrapper;
