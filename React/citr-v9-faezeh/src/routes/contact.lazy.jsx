import { useMutation } from "@tanstack/react-query";
import { createLazyFileRoute } from "@tanstack/react-router";
import PostContact from "../api/postContact";
import { useFormState, useFormStatus } from "react-dom";

export const Route = createLazyFileRoute("/contact")({
  component: RouteComponent,
});

function RouteComponent() {
  const mutation = useMutation({
    mutationFn: function (e) {
      e.preventDefault();
      const formData = new FormData(e.target);
      return PostContact(
        formData.get("name"),
        formData.get("email"),
        formData.get("message"),
      );
    },
  });
  return (
    <div className="contact">
      <h2>Contact</h2>
      {mutation.isSuccess ? (
        <h3>Submited</h3>
      ) : (
        <form action={mutation.mutate}>
          <ContactInput type="text" name="name" placeholder="Name" />
          <ContactInput type="email" name="email" placeholder="Email" />
          <textarea name="message" placeholder="Message"></textarea>
          <button>Submit</button>
        </form>
      )}
    </div>
  );
}

function ContactInput({ type, name, placeholder, ...props }) {
  const { pending } = useFormStatus();
  return (
    <input
      type={type}
      name={name}
      disabled={pending}
      placeholder={placeholder}
      {...props}
    />
  );
}
