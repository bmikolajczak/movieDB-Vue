import { Form as VeeForm, Field as VeeField, ErrorMessage, defineRule, configure } from "vee-validate";
import { required, email, confirmed, alpha_dash, alpha, min } from "@vee-validate/rules";
export default {
  install(app) {
    app.component("VeeForm", VeeForm);
    app.component("VeeField", VeeField);
    app.component("ErrorMessage", ErrorMessage);
    //defining validation rules
    defineRule("required", required);
    defineRule("email", email);
    defineRule("confirm_password", confirmed);
    defineRule("nick", alpha_dash);
    defineRule("name", alpha);
    defineRule("min", min);
    //configuring custom error messages
    configure({
      generateMessage: (ctx) => {
        const messages = {
          required: `The field ${ctx.field} is required.`,
          min: `The field ${ctx.field} is too short.`,
          email: `The field ${ctx.field} must be a vaild email`,
          confirm_password: "The passwords do not match.",
        };
        const message = messages[ctx.rule.name] ? messages[ctx.rule.name] : `The field ${ctx.field} is invalid`;
        return message;
      },
      validateOnBlur: true,
      validateOnChange: true,
    });
  },
};
