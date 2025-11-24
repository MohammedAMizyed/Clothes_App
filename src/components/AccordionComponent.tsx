import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import type { ReactNode } from "react"
// import underArrow from "../assets/under arrow.svg"
import { cn } from "@/lib/utils"
export default function AccordionComponent({
  title,
  description,
}: {
  title: string | ReactNode
  description: ReactNode
}) {
  return (
    <div className="">
      <Accordion type="single" collapsible>
        <AccordionItem className={cn("")} value="item-1">
          <AccordionTrigger className=" active:text-[#ff914c] cursor-pointer text-[20px] font-semibold ">
            {title}
          </AccordionTrigger>
          <AccordionContent>{description}</AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  )
}
