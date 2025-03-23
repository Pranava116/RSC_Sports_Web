import React, { useState } from "react";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

const SportsCard = (props) => {
  const [showMore, setShowMore] = useState(false);

  const handleShowMore = () => {
	if(props.additionalInfo != ''){
		setShowMore(!showMore); // Toggle the state to show/hide the dialog
	}
  };

  return (
    <section className="flex flex-row bg-transparent">
      <div>
        <CardContainer className="w-[300px] mx-[30px] inter-var justify-center items-cent">
          <CardBody className="bg-gray-50 relative group/card w-[500px] h-[450px] dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] sm:w-[30rem] rounded-xl p-6 border">
            <CardItem
              translateZ="50"
              className="text-xl font-bold text-neutral-600 dark:text-white"
            >
              {props.title}
            </CardItem>
            <CardItem
              as="p"
              translateZ="60"
              className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
            ></CardItem>
            <CardItem translateZ="100" className="w-[170px] object-fit items-center mt-8">
              <img
                src={props.src}
                style={{
                  marginLeft: "10px",
                  height: "200px",
                  width: "200px",
                }}
                className="h-[100px] w-[200px] object-contain rounded-xl group-hover/card:shadow-xl"
                alt="thumbnail"
              />
            </CardItem>
            <div className="flex justify-between items-center mt-20">
              <CardItem
                translateZ={50}
                href="https://twitter.com/mannupaaji"
                target="__blank"
                className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
              ></CardItem>

              {/* Alert Dialog */}
              <AlertDialog>
                <AlertDialogTrigger asChild>
                  <CardItem
                    translateZ={50}
                    as="button"
                    onClick={handleShowMore} // Handle the click event
                    className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                  >
					Read More
                  </CardItem>
                </AlertDialogTrigger>
                <AlertDialogContent className='bg-slate-700'>
                  <AlertDialogHeader >
                    <AlertDialogTitle className='text-white'>{props.title}</AlertDialogTitle>
                    <AlertDialogDescription className='text-white'>
                      {props.additionalInfo} {/* Display additional information */}
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                  <AlertDialogFooter className='text-white'>
                    <AlertDialogCancel onClick={() => setShowMore(false)}>
                      Close
                    </AlertDialogCancel>
                    <AlertDialogAction className='text-white border border-white'>Continue</AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
            </div>
          </CardBody>
        </CardContainer>
      </div>
    </section>
  );
};

export default SportsCard;