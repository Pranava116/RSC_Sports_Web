import React, { useState, useEffect } from "react";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogCancel,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";

const SportsCard = (props) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  // Reset animation state when dialog closes
  useEffect(() => {
    if (!isDialogOpen) {
      const timer = setTimeout(() => {
        setIsAnimating(false);
      }, 300); // Match this with your animation duration
      return () => clearTimeout(timer);
    }
  }, [isDialogOpen]);

  const handleDialogChange = (open) => {
    setIsDialogOpen(open);
    if (open) {
      setIsAnimating(true);
    }
  };

  return (
    <div className="relative">
      <div
        className={`transition-all duration-300 ${
          isDialogOpen
            ? "scale-95 opacity-80 blur-sm"
            : "scale-100 opacity-100 blur-none"
        }`}
      >
        <CardContainer className="w-[300px] mx-[30px] inter-var">
          <CardBody
            className={`bg-gray-50 relative group/card w-[500px] h-[450px] ${
              !isDialogOpen &&
              "dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1]"
            } dark:bg-black dark:border-white/[0.2] border-black/[0.1] sm:w-[30rem] rounded-xl p-6 border ${
              isAnimating ? "pointer-events-none" : ""
            }`}
            onMouseEnter={() => !isDialogOpen && setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <CardItem
              translateZ={isHovered && !isDialogOpen ? "50" : "20"}
              className="text-xl font-bold text-neutral-600 dark:text-white transition-all duration-300"
            >
              {props.title}
            </CardItem>

            <CardItem
              translateZ={isHovered && !isDialogOpen ? "100" : "60"}
              className="w-[170px] object-fit items-center mt-8 transition-all duration-300"
            >
              <img
                src={props.src}
                style={{
                  marginLeft: "10px",
                  height: "200px",
                  width: "200px",
                }}
                className={`h-[100px] w-[200px] object-contain rounded-xl ${
                  isHovered && !isDialogOpen ? "shadow-xl" : ""
                } transition-all duration-300`}
                alt="thumbnail"
              />
            </CardItem>

            <div className="flex justify-between items-center mt-20">
              <AlertDialog onOpenChange={handleDialogChange}>
                <AlertDialogTrigger asChild>
                  <Button
                    variant="outline"
                    className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold hover:scale-105 transition-transform"
                  >
                    Read More
                  </Button>
                </AlertDialogTrigger>

                <AlertDialogContent className="bg-black border-gray-800 max-w-2xl">
                  <AlertDialogHeader>
                    <AlertDialogTitle className="text-white text-2xl">
                      {props.title}
                    </AlertDialogTitle>
                    <AlertDialogDescription className="text-white text-lg space-y-4">
                      {props.img && (
                        <div className="mb-4">
                          <img
                            src={props.img}
                            alt={props.title}
                            className="w-full h-auto max-h-[400px] object-contain rounded-lg border border-gray-700"
                          />
                        </div>
                      )}
                      <div className="max-h-[60vh] overflow-y-auto pr-2">
                        {props.additionalInfo}
                      </div>
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                  <AlertDialogFooter className="text-white">
                    <AlertDialogCancel onClick={handleDialogChange}>
                      Close
                    </AlertDialogCancel>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
            </div>
          </CardBody>
        </CardContainer>
      </div>
    </div>
  );
};

export default SportsCard;
