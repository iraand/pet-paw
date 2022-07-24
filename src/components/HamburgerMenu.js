import Icons from '../images/icons.svg'

export const HamburgerMenu = ({ handleClose, show, children }) => {
    const showHideClassName = show ? "hamburger-menu move-to" : "hamburger-menu move-from";
  
    return (
      <div className={showHideClassName}>
        <section className="modal-menu">
          {children}
          <button type="button" onClick={handleClose} className="button button-close-menu">
            <svg className="close-menu" viewBox="0 0 26 26">
              <use width="26" height="26" href={`${Icons}#close-menu`}></use>
            </svg>
          </button>
        </section>
      </div>
    );
};
