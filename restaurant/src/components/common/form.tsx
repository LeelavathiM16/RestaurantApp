import { useForm, Controller } from "react-hook-form";
import type { ControllerRenderProps } from "react-hook-form";
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import type { ControllerType, formComponentTypes, optionsType } from "@/type";
import { string, z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const inputTypes = {
  INPUT: "input",
  SELECT: "select",
  TEXTAREA: "textArea",
};

const schema = z.object({
  username: string().max(5, "maximum 5 letters").nonempty(),
  email: string().refine(
    (val) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val),
    "invalid email",
  ),
  password: string()
    .min(8, "minimum 8 characters")
    .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/),
});

type FormValues = z.infer<typeof schema>;

function FormComponent({ formControl, buttonText }: formComponentTypes) {
  //useform
  const { handleSubmit, control } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      username: "",
      email: "",
      password: "",
    },
  });
  const OnSubmit = async (data: FormValues) => {
    console.log(data);
  };

  const fieldInputSelection = (
    fieldConfig: ControllerType,
    field: ControllerRenderProps<FormValues, keyof FormValues>,
  ): React.ReactElement => {
    switch (fieldConfig.elementType) {
      case inputTypes.INPUT:
        return (
          <Input
            id={fieldConfig.name}
            placeholder={fieldConfig.placeholder}
            type={fieldConfig.type}
            {...field}
          ></Input>
        );
      case inputTypes.SELECT:
        return (
          <Select value={field.value ?? ""} onValueChange={field.onChange}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder={fieldConfig.placeholder} />
            </SelectTrigger>
            <SelectContent>
              {fieldConfig.options
                ? fieldConfig.options.map((optionItem: optionsType) => (
                    <SelectItem
                      key={optionItem.id}
                      id={optionItem.id}
                      value={optionItem.id}
                    >
                      {optionItem.id}
                    </SelectItem>
                  ))
                : null}
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
          ></Input>
        );
    }
  };

  return (
    <form onSubmit={handleSubmit(OnSubmit)} className="w-full max-w-sm">
      <div className="flex flex-col gap-3">
        {formControl?.map((fieldConfig: ControllerType) => (
          <FieldGroup key={fieldConfig.name}>
            <Controller
              key={fieldConfig.name}
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
      <Button type="submit" className="mt-2 w-full">
        {buttonText || "Submit"}
      </Button>
    </form>
  );
}

export default FormComponent;
