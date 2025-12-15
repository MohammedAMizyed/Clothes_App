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
  onToggle,
  open,
}: {
  title: string | ReactNode
  description: ReactNode
  onToggle?: (open: boolean) => void
  open?: boolean
}) {
  return (
    <div className="">
      <Accordion
        type="single"
        collapsible
        onValueChange={(value) => {
          onToggle?.(!!value)
        }}
      >
        <AccordionItem className={cn("")} value={"item-1"}>
          <AccordionTrigger
            className={cn(
              "data-[state=open]:text-[#ff914c] cursor-pointer text-[20px] font-semibold "
            )}
          >
            {title}
          </AccordionTrigger>
          {open && <AccordionContent>{description}</AccordionContent>}
        </AccordionItem>
      </Accordion>
    </div>
  )
}
