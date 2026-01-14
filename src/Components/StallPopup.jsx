


import { Dialog, DialogContent, DialogTitle } from "../Components/ui/dialog";
import { Button } from "../Components/ui/button";

const fairTentIcon = "/images/fairlogo.jpg";

export default function StallPopup({
  open,
  onOpenChange,
  onKnowMore,
  onBookStall,
}) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        className="
          sm:max-w-[520px]
          overflow-hidden
          rounded-2xl
          border border-primary
          bg-white
          shadow-2xl
          p-0
        "
        data-testid="popup-welcome"
      >
        {/* ================= TOP BANNER ================= */}
        <div className="relative bg-gradient-to-r from-primary to-primary/80 px-6 py-4 text-center text-white">
          <div className="mx-auto mb-1 flex h-20 w-20 items-center justify-center rounded-full bg-white/90">
            <img
              src={fairTentIcon}
              alt="Fair Icon"
              className="h-16 w-16 rounded-full object-cover"
            />
          </div>

          <DialogTitle className="text-xl font-bold">
            Ujjain Fair 2025
          </DialogTitle>
          <p className="mt-1 text-sm opacity-90">
            Prosperous Forest — Happy People
          </p>
        </div>

        {/* ================= CONTENT ================= */}
        <div className="px-6 py-6 text-center space-y-4">
          <p className="text-lg font-semibold text-primary">
            Register for Stall / Participation
          </p>

          <p className="text-sm text-muted-foreground max-w-sm mx-auto">
            Be part of the upcoming Ujjain Fair and showcase your products,
            services, and culture to thousands of visitors.
          </p>

          <div className="text-sm font-medium text-gray-700">
            📅 <span className="font-semibold">17 – 23 December 2025</span>
            <br />
            📍 Lal Parade Ground, Bhopal
          </div>

          {/* ================= ACTIONS ================= */}
          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <Button
              variant="outline"
              onClick={() => {
                onKnowMore();
                onOpenChange(false);
              }}
              className="w-full"
              data-testid="button-know-more"
            >
              Know More
            </Button>

            <Button
              onClick={() => {
                onBookStall();
                onOpenChange(false);
              }}
              className="w-full"
              data-testid="button-book-stall"
            >
              Enquire Now
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
