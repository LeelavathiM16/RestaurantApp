import { useForm, Controller } from "react-hook-form";
import type { ControllerRenderProps } from "react-hook-form";
import { Field, FieldError, FieldGroup, FieldLabel } from "@/components/ui/field";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import { schemaMap, defaultValuesMap } from "./schema";
import type {
  ControllerType,
  FormValues,
  formComponentTypes,
  optionsType,
} from "../../../type";

const inputTypes = {
  INPUT: "input",
  SELECT: "select",
  TEXTAREA: "textArea",
} as const;

function FormComponent({
  formControl,
  buttonText,
  OnSubmit,
  mode,
}: formComponentTypes) {
  const schema = schemaMap[mode];

  const { handleSubmit, control } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: defaultValuesMap[mode],
  });

  const fieldInputSelection = (
    fieldConfig: ControllerType,
    field: ControllerRenderProps<FormValues, keyof FormValues>
  ): React.ReactElement => {
    switch (fieldConfig.elementType) {
      case inputTypes.INPUT:
        return (
          <Input
            id={fieldConfig.name}
            placeholder={fieldConfig.placeholder}
            type={fieldConfig.type}
            {...field}
          />
        );

      case inputTypes.SELECT:
        return (
          <Select value={field.value ?? ""} onValueChange={field.onChange}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder={fieldConfig.placeholder} />
            </SelectTrigger>
            <SelectContent>
              {fieldConfig.options?.map((optionItem: optionsType) => (
                <SelectItem key={optionItem.id} value={optionItem.id}>
                  {optionItem.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        );

      case inputTypes.TEXTAREA:
        return (
          <Textarea
            id={fieldConfig.name}
            placeholder={fieldConfig.placeholder}
            {...field}
          />
        );

      default:
        return (
          <Input
            id={fieldConfig.name}
            placeholder={fieldConfig.placeholder}
            type={fieldConfig.type}
            {...field}
          />
        );
    }
  };

  return (
    <form onSubmit={handleSubmit(OnSubmit)} className="w-full max-w-sm">
      <div className="flex flex-col gap-3">
        {formControl?.map((fieldConfig: ControllerType) => (
          <FieldGroup key={fieldConfig.name}>
            <Controller
              control={control}
              name={fieldConfig.name as keyof FormValues}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel>{fieldConfig.label}</FieldLabel>
                  {fieldInputSelection(fieldConfig, field)}
                  {fieldState.error && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />
          </FieldGroup>
        ))}
      </div>
      <Button type="submit" className="mt-3 w-full">
        {buttonText || "Submit"}
      </Button>
    </form>
  );
}

export default FormComponent;