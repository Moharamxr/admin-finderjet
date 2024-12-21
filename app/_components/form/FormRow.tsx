const FormRow = ({ children }: { children: React.ReactNode }) => (
  <div className="flex md:flex-row flex-col justify-between items-center gap-10">
    {children}
  </div>
);
export default FormRow;