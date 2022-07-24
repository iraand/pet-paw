import Icons from '../images/icons.svg'

export const Modal = ({ handleClose, show, children }) => {
    const showHideClassName = show ? "modal display-block" : "modal display-none";
  
    return (
      <div className={showHideClassName}>
        <section className="modal-main">
          {children}
          <button type="button" onClick={handleClose} className="button button-close">
            <svg className="icon-close" viewBox="0 0 18 18">
                <use width="16" height="16" href={`${Icons}#close`}></use>
            </svg>
          </button>
        </section>
      </div>
    );
};
