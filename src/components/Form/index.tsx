import { ChangeEvent, useState } from "react";
import { usePage } from "../../hooks/usePage";
import "./style.css";
import {
  DefaultButton,
  Label,
  NumberInput,
  Option,
  SelectInput,
  TextInput,
} from "..";

export const Form = () => {
  const { addTransaction } = usePage();
  const [dataDescription, setDataDescription] = useState("");
  const [dataValue, setDataValue] = useState("");
  const [dataType, setDataType] = useState("entry");

  function handleSubmit(event: ChangeEvent<HTMLFormElement>) {
    event.preventDefault();

    const newData = {
      description: dataDescription,
      value: Number(dataValue),
      type: dataType,
    };

    addTransaction(newData);
  }

  return (
    <form className="finance_form" onSubmit={handleSubmit}>
      <div className="form_top">
        <Label htmlFor="description">Descrição</Label>
        <TextInput
          id="description"
          placeholder="Digite aqui sua descrição"
          value={dataDescription}
          onChange={(event) => setDataDescription(event.target.value)}
        />
        <p>Ex: Compra de roupas</p>
      </div>

      <div className="form_bottom">
        <div className="form_bottom_left">
          <Label htmlFor="value">Valor</Label>
          <NumberInput
            id="value"
            placeholder="Digite o valor"
            onChange={(event) => setDataValue(event.target.value)}
          />
        </div>

        <div className="form_bottom_right">
          <Label htmlFor="value-type">Tipo de valor</Label>
          <SelectInput
            id="value-type"
            onChange={(event) => setDataType(event.target.value)}
          >
            <Option value="entry">Entrada</Option>
            <Option value="expense">Despesa</Option>
          </SelectInput>
        </div>
      </div>
      <DefaultButton className="pink_btn" type="submit">
        Inserir valor
      </DefaultButton>
    </form>
  );
};
