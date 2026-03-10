import type { VariantProps } from "class-variance-authority"
import { cva } from "class-variance-authority"

export { default as Button } from "./Button.vue"
export { default as Dialog } from "./Dialog.vue"
export { default as DialogClose } from "./DialogClose.vue"
export { default as DialogContent } from "./DialogContent.vue"
export { default as DialogDescription } from "./DialogDescription.vue"
export { default as DialogFooter } from "./DialogFooter.vue"
export { default as DialogHeader } from "./DialogHeader.vue"
export { default as DialogOverlay } from "./DialogOverlay.vue"
export { default as DialogScrollContent } from "./DialogScrollContent.vue"
export { default as DialogTitle } from "./DialogTitle.vue"
export { default as DialogTrigger } from "./DialogTrigger.vue"
export { default as Toaster } from "./Sonner.vue"
export { default as Input } from "./Input.vue"
export { default as Select } from "./Select.vue"
export { default as SelectContent } from "./SelectContent.vue"
export { default as SelectGroup } from "./SelectGroup.vue"
export { default as SelectItem } from "./SelectItem.vue"
export { default as SelectItemText } from "./SelectItemText.vue"
export { default as SelectLabel } from "./SelectLabel.vue"
export { default as SelectScrollDownButton } from "./SelectScrollDownButton.vue"
export { default as SelectScrollUpButton } from "./SelectScrollUpButton.vue"
export { default as SelectSeparator } from "./SelectSeparator.vue"
export { default as SelectTrigger } from "./SelectTrigger.vue"
export { default as SelectValue } from "./SelectValue.vue"
export { default as Field } from "./Field.vue"
export { default as FieldContent } from "./FieldContent.vue"
export { default as FieldDescription } from "./FieldDescription.vue"
export { default as FieldError } from "./FieldError.vue"
export { default as FieldGroup } from "./FieldGroup.vue"
export { default as FieldLabel } from "./FieldLabel.vue"
export { default as FieldLegend } from "./FieldLegend.vue"
export { default as FieldSeparator } from "./FieldSeparator.vue"
export { default as FieldSet } from "./FieldSet.vue"
export { default as FieldTitle } from "./FieldTitle.vue"
export { default as Label } from "./Label.vue"
export { default as Separator } from "./Separator.vue"
export { default as RadioGroup } from "./RadioGroup.vue"
export { default as RadioGroupItem } from "./RadioGroupItem.vue"
export const buttonVariants = cva(
  "cursor-pointer inline-flex items-center justify-center gap-2 whitespace-normal break-words text-center rounded-xl text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive:
          "bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
        outline:
          "border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost:
          "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        "default": "min-h-9 px-4 py-2 has-[>svg]:px-3",
        "sm": "min-h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
        "lg": "min-h-10 rounded-md px-6 has-[>svg]:px-4",
        "icon": "size-9",
        "icon-sm": "size-8",
        "icon-lg": "size-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
)
export type ButtonVariants = VariantProps<typeof buttonVariants>

export const fieldVariants = cva(
  "group/field flex w-full gap-3 data-[invalid=true]:text-destructive",
  {
    variants: {
      orientation: {
        vertical: ["flex-col [&>*]:w-full [&>.sr-only]:w-auto"],
        horizontal: [
          "flex-row items-center",
          "[&>[data-slot=field-label]]:flex-auto",
          "has-[>[data-slot=field-content]]:items-start has-[>[data-slot=field-content]]:[&>[role=checkbox],[role=radio]]:mt-px",
        ],
        responsive: [
          "flex-col [&>*]:w-full [&>.sr-only]:w-auto @md/field-group:flex-row @md/field-group:items-center @md/field-group:[&>*]:w-auto",
          "@md/field-group:[&>[data-slot=field-label]]:flex-auto",
          "@md/field-group:has-[>[data-slot=field-content]]:items-start @md/field-group:has-[>[data-slot=field-content]]:[&>[role=checkbox],[role=radio]]:mt-px",
        ],
      },
    },
    defaultVariants: {
      orientation: "vertical",
    },
  },
)

export type FieldVariants = VariantProps<typeof fieldVariants>
