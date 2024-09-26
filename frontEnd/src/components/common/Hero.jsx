export default function Hero() {
    return (
        <sectoin className="grid grid-cols-3 ">
            <div className="col-span-2 bg-Light-backgroundSec text-Dark-backgroundPri">
                <div>
                    <h1 className="text-5xl font-bold">Lorem ipsum dolor sit amet consectetur adipisicing elit. </h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat, deleniti corrupti ipsum.
                    </p>
                </div>

                <div>
                    <button>Login</button>
                    <button>Register</button>
                </div>

                <div>
                    <div>
                        <p>500K</p>
                        <p>Client</p>
                    </div>

                    <div>
                        <p>500K</p>
                        <p>Client</p>
                    </div>
                </div>
            </div>
            <div className="bg-Light-secondary">
                part 1
            </div>
        </sectoin>
    )
}
