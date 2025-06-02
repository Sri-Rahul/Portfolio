"use client";

import * as Accordion from "@radix-ui/react-accordion";
import { motion, useInView } from "framer-motion";
import type { ReactNode } from "react";
import React, { forwardRef, useEffect, useRef, useState } from "react";
import { cn } from "../../lib/utils";

type AccordionItemProps = {
  children: React.ReactNode;
  className?: string;
} & Accordion.AccordionItemProps;

const AccordionItem = forwardRef<HTMLDivElement, AccordionItemProps>(
  ({ children, className, ...props }, forwardedRef) => (
    <Accordion.Item
      className={cn(
        "mt-px overflow-hidden focus-within:relative focus-within:z-10",
        className,
      )}
      {...props}
      ref={forwardedRef}
    >
      {children}
    </Accordion.Item>
  ),
);
AccordionItem.displayName = "AccordionItem";

interface AccordionTriggerProps {
  children: React.ReactNode;
  className?: string;
}

const AccordionTrigger = forwardRef<HTMLButtonElement, AccordionTriggerProps>(
  ({ children, className, ...props }, forwardedRef) => (
    <Accordion.Header className="flex">
      <Accordion.Trigger
        className={cn("group flex flex-1 cursor-pointer items-center justify-between px-5 text-[15px] leading-none outline-none", className)}
        {...props}
        ref={forwardedRef}
      >
        {children}
      </Accordion.Trigger>
    </Accordion.Header>
  )
);
AccordionTrigger.displayName = "AccordionTrigger";

type AccordionContentProps = {
  children: ReactNode;
  className?: string;
} & Accordion.AccordionContentProps;

const AccordionContent = forwardRef<HTMLDivElement, AccordionContentProps>(
  ({ children, className, ...props }, forwardedRef) => (
    <Accordion.Content
      className={cn("data-[state=closed]:animate-slide-up data-[state=open]:animate-slide-down overflow-hidden text-[15px] font-medium", className)}
      {...props}
      ref={forwardedRef}
    >
      <div className="px-5 py-2">{children}</div>
    </Accordion.Content>
  )
);
AccordionContent.displayName = "AccordionContent";

export interface FeaturesDataProps {
  id: number;
  title: string;
  content: string;
  image?: string;
  imagealt?: string;
  video?: string;
  icon?: React.ReactNode;
}

export interface FeaturesProps {
  collapseDelay?: number;
  ltr?: boolean;
  linePosition?: "left" | "right" | "top" | "bottom";
  data: FeaturesDataProps[];
}

export function Features({
  collapseDelay = 5000,
  ltr = false,
  linePosition = "left",
  data = [],
}: FeaturesProps) {
  const [currentIndex, setCurrentIndex] = useState<number>(-1);
  const carouselRef = useRef<HTMLUListElement>(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  useEffect(() => {
    const timer = setTimeout(() => {
      if (isInView) {
        setCurrentIndex(0);
      } else {
        setCurrentIndex(-1);
      }
    }, 100);

    return () => clearTimeout(timer);
  }, [isInView]);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex !== undefined ? (prevIndex + 1) % data.length : 0
      );
    }, collapseDelay);

    return () => clearInterval(timer);
  }, [collapseDelay, currentIndex, data.length]);
  return (
    <motion.section 
      ref={ref} 
      id="features" 
      className="w-full"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <motion.div 
        className="w-full"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <div className="mx-auto w-full">          <div className="mx-auto grid h-full items-center gap-10 lg:grid-cols-2">
            <motion.div 
              className={`order-1 hidden lg:order-none lg:flex ${ltr ? "lg:order-2 lg:justify-end" : "justify-start"}`}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <Accordion.Root
                className="w-full"
                type="single"
                defaultValue={`item-${currentIndex}`}
                value={`item-${currentIndex}`}
                onValueChange={(value) => setCurrentIndex(Number(value.split("-")[1]))}
              >                {data.map((item, index) => (                  <motion.div
                    key={item.id}
                    className="pb-8"
                    initial={{ 
                      opacity: 0, 
                      y: 60,
                      scale: 0.9,
                      rotateX: -15
                    }}
                    whileInView={{ 
                      opacity: 1, 
                      y: 0,
                      scale: 1,
                      rotateX: 0
                    }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ 
                      duration: 0.8, 
                      delay: 0.2 + (index * 0.15),
                      ease: [0.25, 0.1, 0.25, 1],
                      type: "spring",
                      stiffness: 100,
                      damping: 15
                    }}
                    whileHover={{
                      scale: 1.02,
                      transition: { duration: 0.3, ease: "easeOut" }
                    }}
                  ><AccordionItem
                    key={item.id}
                    className="relative mb-32 last:mb-0 border-b border-neutral-800/30 pb-8 last:border-b-0 last:pb-0"
                    value={`item-${index}`}
                  >                    {linePosition === "left" || linePosition === "right" ? (
                      <motion.div
                        className={`absolute top-2 bottom-2 w-0.5 overflow-hidden rounded-lg bg-neutral-300/50 dark:bg-neutral-300/30 ${
                          linePosition === "right"
                            ? "left-auto right-0"
                            : "left-0 right-auto"
                        }`}
                        initial={{ scaleY: 0, opacity: 0 }}
                        whileInView={{ scaleY: 1, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ 
                          duration: 0.5,
                          delay: 0.3 + (index * 0.1),
                          ease: "easeOut"
                        }}
                        style={{ originY: 0 }}
                      >                        <div
                          className={`absolute left-0 top-0 w-full ${
                            currentIndex === index ? "h-full" : "h-0"
                          } origin-top bg-[#e4ded7] transition-all ease-linear dark:bg-white`}
                          style={{
                            transitionDuration:
                              currentIndex === index
                                ? `${collapseDelay}ms`
                                : "0s",
                          }}
                        ></div>
                      </motion.div>
                    ) : null}
                    <div className="relative flex items-center">                      <motion.div 
                        className="item-box mx-2 flex size-12 shrink-0 items-center justify-center rounded-full bg-[#e4ded7]/10 sm:mx-6"
                        initial={{ 
                          scale: 0,
                          rotate: -180,
                          opacity: 0
                        }}
                        whileInView={{ 
                          scale: 1,
                          rotate: 0,
                          opacity: 1
                        }}
                        viewport={{ once: true }}
                        transition={{ 
                          duration: 0.6,
                          delay: 0.4 + (index * 0.15),
                          type: "spring",
                          stiffness: 150,
                          damping: 12
                        }}
                        whileHover={{ 
                          scale: 1.15, 
                          backgroundColor: "rgba(228, 222, 215, 0.25)",
                          rotate: 5,
                          transition: { duration: 0.2 }
                        }}
                      >
                        {item.icon}
                      </motion.div>                      <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ 
                          duration: 0.6,
                          delay: 0.5 + (index * 0.15),
                          ease: "easeOut"
                        }}
                      >
                        <motion.div
                          whileHover={{ x: 5 }}
                          transition={{ duration: 0.2 }}
                        >
                          <AccordionTrigger className="pl-0 text-xl font-bold text-[#e4ded7] text-left">
                            {item.title}
                          </AccordionTrigger>
                        </motion.div>
                        <motion.div 
                          className="pl-0 text-left text-[16px] leading-6 text-[#e4ded7]/90 mt-2"
                          initial={{ opacity: 0, y: 10 }}
                          whileInView={{ opacity: 0.9, y: 0 }}
                          viewport={{ once: true }}
                          animate={{ opacity: currentIndex === index ? 1 : 0.7 }}
                          transition={{ 
                            initial: { duration: 0.6, delay: 0.6 + (index * 0.15) },
                            animate: { duration: 0.3 }
                          }}
                        >
                          {item.content}
                        </motion.div>
                      </motion.div>
                    </div>
                  </AccordionItem>
                  </motion.div>
                ))}
              </Accordion.Root>
            </motion.div>            {/* Image rendering using <img> */}
            <motion.div 
              className={`h-[250px] min-h-[200px] max-h-[250px] w-auto relative ${ltr && "lg:order-1"}`}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              {data[currentIndex]?.image ? (
                <motion.div
                  key={currentIndex}
                  className="relative aspect-auto h-full w-full max-h-[250px] rounded-xl p-1 shadow-lg overflow-hidden"
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.25, ease: "easeOut" }}
                >
                  <img
                    src={data[currentIndex]?.image || '/projects/default-image.png'}  // Fallback image here
                    alt={data[currentIndex]?.imagealt || data[currentIndex]?.title}
                    width={250}
                    height={250}
                    className="object-contain w-full h-full rounded-xl"
                    onError={(e) => {
                      console.error('Error loading image:', data[currentIndex]?.image);
                      (e.target as HTMLImageElement).style.display = 'none';
                    }}
                  />
                </motion.div>
              ) : (
                <div className="aspect-auto max-h-[250px] h-full w-full rounded-xl bg-[#1e1e24] p-1"></div>              )}
            </motion.div>
          </div>
        </div>
      </motion.div>
    </motion.section>
  );
}
