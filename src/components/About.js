import React from 'react'

export default function About(props) {
    

// const [myStyle, setmyStyle] = useState({ color: 'black',
// backgroundColor: 'white'});
// const [btnText,setBtnText]= useState("Enable dark mode");

// const darkClick=()=>{
//     if(myStyle.color==='black'){
//     setmyStyle({
//             color: 'white',
//             backgroundColor: 'black',
//             border: '2px solid white'
//     });
//     setBtnText("Enable light mode");
// }
// else{
//     setmyStyle({
//         color: 'black',
//         backgroundColor: 'white'
//     });
//     setBtnText("Enable dark mode")
// }
// }
let myStyle={
    color: props.mode==='dark'?'white':'black',
    backgroundColor: props.mode==='dark'?'#212529':'white'
}

return (
    <>
            <div className="container" style={myStyle}>
                <h1>About us</h1>
                <div className="accordion" id="accordionExample" style={myStyle}>
                    <div className="accordion-item" style={myStyle}>
                        <h2 className="accordion-header" id="headingOne">
                            <button className="accordion-button"  style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                Analyze your text
                            </button>
                        </h2>
                        <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                            <div className="accordion-body" style={myStyle}>
                               Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia error neque, aperiam autem assumenda amet id pariatur debitis illo saepe rerum laboriosam voluptatem ipsam laborum, possimus, cumque quae repellat. Pariatur nesciunt, ducimus voluptatibus architecto veniam odio labore vel amet ad dolor neque laborum, ab quis dolorem, blanditiis inventore. Aliquid delectus omnis eos reiciendis! Saepe velit reprehenderit, eius porro nobis fugiat. Placeat, reprehenderit quis. Id optio nobis natus voluptatum temporibus! Eveniet totam alias, obcaecati fugit mollitia consequuntur possimus, culpa iusto beatae, dolor ipsum. Soluta accusantium magni molestiae ea, dolorem eum? Veritatis labore error illo deleniti fugit est voluptatem voluptates ipsam officia.
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item" style={myStyle}>
                        <h2 className="accordion-header" id="headingTwo">
                            <button className="accordion-button collapsed"  style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                Free to use
                            </button>
                        </h2>
                        <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                            <div className="accordion-body" style={myStyle}>
                              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Necessitatibus rem inventore dignissimos ab temporibus possimus aliquid a exercitationem fugit reprehenderit ex cum amet ipsa in quas quasi, veritatis ducimus dolor quam et nisi esse. Obcaecati quasi tempora sit distinctio fuga deserunt nulla dolores dicta non doloribus eveniet voluptates dolorum autem nisi, illo quam ad inventore necessitatibus, earum quibusdam dolor rem doloremque vel tempore? Ut ducimus minus quaerat? Harum non quos facilis tenetur nobis reiciendis, cupiditate veritatis id minus ut dolore commodi dolores ipsam, adipisci corrupti autem praesentium. Et obcaecati maiores sint dolore nemo quae rem ad. Dolorum ipsum mollitia autem.
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item" style={myStyle}>
                        <h2 className="accordion-header" id="headingThree">
                            <button className="accordion-button collapsed"  style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                Browser Compitable
                            </button>
                        </h2>
                        <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                            <div className="accordion-body" style={myStyle}>
                               Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, ullam! Velit inventore tempore repellat! Mollitia, quas dolorem amet animi tenetur maiores illo maxime provident? Nam eum blanditiis voluptatum ratione aliquam in quaerat iste. Non, iure? Delectus obcaecati accusantium nihil! Non possimus, sapiente voluptas ducimus delectus vel porro a temporibus dolorem aliquam quisquam iure voluptatibus tenetur corporis neque. Repellat at accusantium rerum facere esse nostrum placeat maiores sapiente nisi qui labore voluptate iure, recusandae sunt consectetur illum facilis culpa. Reiciendis veniam nihil corrupti alias! Quis, facere eaque minus pariatur consequuntur voluptates nesciunt exercitationem odio placeat a atque expedita maxime ea suscipit.
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        </>
    )
}
