/* 
The children value here is intended to use a svg html component
to render a svg element inside as the icon for the botton
But if you prefer it, you can also instead use an image with
the prop ImageIcon and specify the source path
*/

export default function BurgerButton({ children, ImageIcon = "", imageDescription = "", onClickEvent}) {
    const styleBurgerButton = "inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-primary-100 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-primary-100"

    if (ImageIcon === "") {
        return (
            <button type="button" id="burger_button" onClick={onClickEvent} className={styleBurgerButton}>
                {children}
            </button>
        );
    } else {
        return (
            <button type="button" id="burger_button" onClick={onClickEvent} className={styleBurgerButton}>
                <img src={ImageIcon} alt={ imageDescription} />
            </button>
        );
    }
    
}