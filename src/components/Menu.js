import React from 'react'
import {useSpring, animated} from 'react-spring'
const Menu=(props)=> {
  const animar=useSpring({right: props.show?'-100%':'0%'})
  const animarfade=useSpring({opacity: props.show?'0':'1'})
  let zindex=0;

  const zin={zIndex:zindex}
  return (
      <div className='bodym'>
        <animated.div style={{left: animar.right}}  className='menu'>
            <div className='navbar'>
            <div className='nav-icon' onClick={props.showNav}><i className="fas fa-align-justify"></i></div></div>
        <div className='navigation'>
            <ul>
                {
                    props.item.map((element)=>{
                        return <a key={element.id} href={element.link}><li><i className={element.icon}></i>{element.name}</li></a>
                        

                    })
                }


            </ul>
        </div>
        <hr></hr>
        <div className='social-icons'>
            <ul>
                <li><i className="fab fa-facebook-square"></i></li>
                <li><i className="fab fa-twitter-square"></i></li>
                <li><i className="fab fa-instagram"></i></li>
            </ul>
        </div>
    </animated.div>
    <animated.div style={{opacity:animarfade.opacity, zIndex:zin.zIndex}}  className='contrast'></animated.div>
    </div>

  )
}

export default Menu