const Header = () => {
    return(
        <header>
            <nav className="flex items-center justify-between flex-wrap p-6 bg-black bg-opacity-75">
            <div className="flex items-center flex-shrink-0 text-white mr-6">
                <>
                    <a className="font-semibold text-xl tracking-tight">
                        お手軽Journey
                    </a>
                </>
            </div>
            <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
                <div className="text-sm lg:flex-grow">
                <>
                    <a className="block mt-4 lg:inline-block lg:mt-0 text-white mr-4 ">
                    検索
                    </a>
                </>
                <>
                    <a className="block mt-4 lg:inline-block lg:mt-0 text-white mr-4">
                    マイページ
                    </a>
                </>
                <>
                    <a className="block mt-4 lg:inline-block lg:mt-0 text-white mr-4">
                    おすすめ
                    </a>
                </>
                <>
                    <a className="block mt-4 lg:inline-block lg:mt-0 text-white mr-4">
                    ランキング
                    </a>
                </>
                </div>
            </div>
            </nav>
        </header>
    )
}

export default Header;