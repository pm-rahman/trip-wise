import Image from "next/image";

const About = () => {
    return (
        <div className="mt-14">
            <h1 className="text-2xl uppercase font-semibold border-b border-orange-500 pb-3 mb-6">About Me</h1>
            <div className=" gap-8 mt-2">
                <Image
                    height={400}
                    width={400}
                    className="float-left mr-3 h-[40vh] w-auto rounded"
                    src="https://lh3.googleusercontent.com/a/AAcHTteJ8hmnL9n_bl73PIGQFoQQwVHJFCXBJgq7NjcM979Qvg=s96-c"
                    alt="Owner Image"
                />
                <div>
                    <h4 className="text-lg leading-none mb-2 font-semibold">Hi! My Name is Sha Newoj</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime non facere, ducimus delectus expedita iure eum atque repellendus maiores porro quas accusamus perferendis laudantium eius incidunt accusantium pariatur necessitatibus cum impedit laboriosam fuga aspernatur velit dolorem. Voluptates porro voluptate expedita molestiae, eveniet dolorem quasi dolorum ipsa incidunt cumque nulla obcaecati tempora suscipit quam iste minus. Ad provident, officiis molestiae similique delectus iusto sunt velit tenetur pariatur magnam deleniti sint eius veritatis tempore ipsum, maxime doloremque officia minima rerum consectetur numquam fugit excepturi quidem! Quibusdam tenetur a rem illo quod ratione fugit aut aliquid fugiat. Molestias corrupti cum reiciendis quasi placeat corporis minima, dignissimos non ipsam suscipit adipisci magnam! Fugit quasi fugiat ad iste praesentium, natus tempora sint odit id quos iusto aliquam molestiae illo consequatur consequuntur exercitationem possimus consectetur autem omnis veniam at delectus deserunt? Facere sunt eos cumque? Maiores beatae ab voluptatibus eveniet, consequuntur asperiores? Earum, nesciunt nisi explicabo quibusdam totam asperiores possimus non id enim qui eaque delectus aperiam minima ducimus, cupiditate temporibus, doloribus beatae harum ipsam voluptatibus ut. Aspernatur totam vitae eligendi ut minus ad itaque exercitationem autem, assumenda voluptate perferendis? Quas, aut expedita amet cumque architecto hic excepturi, consequuntur sint, quia mollitia alias incidunt similique est?</p>
                </div>
            </div>
        </div>
    );
};

export default About;