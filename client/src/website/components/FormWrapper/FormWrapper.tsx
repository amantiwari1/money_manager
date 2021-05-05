import tw from "twin.macro";

interface FormWrapperInterface {
  onSubmit: any;
  children: React.ReactNode;
}

const FormWrapper = ({ onSubmit, children }: FormWrapperInterface) => {
  return (
    <div tw="flex  my-5!  md:(min-h-full h-90v) justify-center items-center m-0">
      <div tw="max-w-md mx-1 w-full bg-white  overflow-hidden rounded-lg shadow-2xl  dark:(bg-black) px-10">
        <form tw="max-w-full w-80 mx-auto py-8" onSubmit={onSubmit}>
          {children}
        </form>
      </div>
    </div>
  );
};

export default FormWrapper;