import { getModalContext } from "mobrix-engine-plugins";
import { useSelector } from "react-redux";

const modals = {
  ContextModal: () => {
    const context = useSelector(getModalContext);

    return (
      <div className="p-4 break-words">
        {Object.keys(context).map((key) => (
          <div key={key}>
            {key} : {JSON.stringify(context[key])}
          </div>
        ))}
      </div>
    );
  },
};

export default modals;
