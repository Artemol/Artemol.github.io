interface PromptPropsInterface {
  cmd?: string;
}

const Prompt = (props: PromptPropsInterface) => {
  return (
    <div>
      <span className="tm-green">artemol@Portfolio</span>
      <span className="tm-white">:</span>
      <span className="tm-blue">~</span>
      <span className="tm-white">$ {props.cmd}</span>
    </div>
  );
};

export default Prompt;
