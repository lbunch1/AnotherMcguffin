const HomeGraphic = () => {
    return (
        <div className="h-fit w-auto relative flex justify-center mx-auto lg:max-w-[60%]">
            <img src="/AMBanner_base.png" className="banner_base h-max-screen" alt={"Another McGuffin"} />
            <img src="/AMBanner_shine.png" className="banner_shine h-max-screen absolute" alt={"Another McGuffin"} />
        </div>
    )
}

export default HomeGraphic;