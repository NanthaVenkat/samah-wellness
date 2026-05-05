import { useRef } from "react";
import { usePageEffects } from "../hooks/usePageEffects";

// Common
import PageHero from "../components/Common/PageHero";

// Sections
import MembershipIntro from "../components/Membership/MembershipIntro";
import MembershipPaths from "../components/Membership/MembershipPaths";
import CustomizeMembership from "../components/Membership/CustomizeMembership";
import CommunityMosaic from "../components/Membership/CommunityMosaic";

export default function MembershipsPage() {
  const scope = useRef(null);
  usePageEffects(scope);

  return (
    <div ref={scope} className="page-root">
      <PageHero 
        title="Samah Living memberships"
        body="Rooted in the philosophy of harmony, Samah memberships offer a lifestyle of integrated care rather than a narrow package of sessions."
        cta="Explore memberships"
        image="url('https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=1200&q=80')"
      />
      <MembershipIntro />
      <MembershipPaths />
      <CustomizeMembership />
      <CommunityMosaic />
    </div>
  );
}
