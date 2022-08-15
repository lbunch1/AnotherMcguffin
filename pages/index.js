import Social from '../components/social'
import { useEffect } from 'react';


export default function Home() {

  useEffect(() => {
    const navBar = document.querySelector('.hide-nav');
    let posY= 0;

    window.addEventListener('scroll', () => {
      if (window.scrollY > posY) {
        navBar.classList.add('-translate-y-80');
      } else if (window.scrollY < posY) {
        navBar.classList.remove('-translate-y-80');
      }
      posY = window.scrollY
      
    })
  },[])

  return (
    <>
      <div className="hide-nav w-full fixed transition-all duration-500 ease-in-out">
        <nav className="p-4 flex gap-3 justify-center">
          <Social url="#" img={"/ig.svg"} />
          <Social url="#" img={"/spotify.svg"} />
          <Social url="#" img={"/apple.svg"} />
          <Social url="#" img={"/ytmusic.svg"} />
        </nav>
      </div>
      <p className="text-3xl p-10">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ultrices in iaculis nunc sed augue lacus viverra vitae congue. Nisi vitae suscipit tellus mauris a diam. Faucibus interdum posuere lorem ipsum dolor. Ut placerat orci nulla pellentesque dignissim enim sit amet. Enim diam vulputate ut pharetra sit amet aliquam. Ut consequat semper viverra nam libero. Diam vulputate ut pharetra sit amet aliquam id. Consectetur libero id faucibus nisl. Eget velit aliquet sagittis id. Viverra nibh cras pulvinar mattis nunc sed blandit libero volutpat. Est ullamcorper eget nulla facilisi etiam. Pellentesque id nibh tortor id aliquet lectus proin. Tempus egestas sed sed risus pretium quam. Diam ut venenatis tellus in. Amet aliquam id diam maecenas ultricies mi eget mauris. Nisi scelerisque eu ultrices vitae auctor eu augue. Non diam phasellus vestibulum lorem sed risus ultricies. Luctus venenatis lectus magna fringilla.

Et malesuada fames ac turpis egestas sed tempus. Nunc sed velit dignissim sodales ut eu. Dui id ornare arcu odio ut sem. Velit dignissim sodales ut eu sem integer vitae justo eget. Imperdiet dui accumsan sit amet nulla facilisi morbi. Velit sed ullamcorper morbi tincidunt ornare massa eget. Sed libero enim sed faucibus turpis in eu. Morbi tristique senectus et netus et malesuada. Vulputate ut pharetra sit amet aliquam. Dignissim suspendisse in est ante. Ut faucibus pulvinar elementum integer enim neque.

Sed faucibus turpis in eu mi. Vitae congue eu consequat ac felis donec et odio pellentesque. Tortor id aliquet lectus proin nibh nisl. Sapien eget mi proin sed libero enim sed. Odio ut sem nulla pharetra diam sit amet nisl suscipit. In vitae turpis massa sed elementum tempus egestas. Et malesuada fames ac turpis egestas. Enim sed faucibus turpis in eu mi bibendum. Proin gravida hendrerit lectus a. Iaculis urna id volutpat lacus laoreet non. At lectus urna duis convallis convallis tellus id interdum velit. Aliquet nibh praesent tristique magna sit. In mollis nunc sed id semper risus in. Pharetra massa massa ultricies mi quis hendrerit dolor magna. Pretium aenean pharetra magna ac placerat vestibulum. Fames ac turpis egestas maecenas pharetra convallis posuere. Rhoncus dolor purus non enim. Turpis nunc eget lorem dolor sed viverra ipsum nunc aliquet. Nunc sed augue lacus viverra vitae congue eu. Integer malesuada nunc vel risus commodo.

Quis hendrerit dolor magna eget est lorem ipsum dolor sit. At lectus urna duis convallis convallis tellus id interdum. Amet tellus cras adipiscing enim eu turpis egestas. Dignissim enim sit amet venenatis urna cursus eget nunc. At erat pellentesque adipiscing commodo elit at imperdiet. Elementum sagittis vitae et leo duis ut. Penatibus et magnis dis parturient montes nascetur ridiculus. Porta nibh venenatis cras sed felis eget velit aliquet sagittis. Dolor sed viverra ipsum nunc aliquet bibendum enim. Et magnis dis parturient montes nascetur ridiculus. Diam donec adipiscing tristique risus nec feugiat in. Nisi lacus sed viverra tellus. Urna nec tincidunt praesent semper. Tortor aliquam nulla facilisi cras fermentum odio eu feugiat pretium. Rhoncus mattis rhoncus urna neque viverra justo nec ultrices dui. Eu sem integer vitae justo eget magna.

Aenean et tortor at risus viverra adipiscing at in. Viverra nibh cras pulvinar mattis nunc. Vel pharetra vel turpis nunc eget. Eget velit aliquet sagittis id consectetur purus ut faucibus. Donec enim diam vulputate ut pharetra sit amet aliquam id. Massa id neque aliquam vestibulum morbi. Diam vel quam elementum pulvinar etiam non. Nisi scelerisque eu ultrices vitae auctor eu. Etiam dignissim diam quis enim lobortis. Pharetra diam sit amet nisl suscipit adipiscing. Ipsum a arcu cursus vitae. Iaculis nunc sed augue lacus viverra vitae congue eu consequat. Orci eu lobortis elementum nibh tellus.

Dis parturient montes nascetur ridiculus. Consectetur adipiscing elit ut aliquam purus sit amet. Non odio euismod lacinia at quis. Urna condimentum mattis pellentesque id nibh tortor. Vitae congue eu consequat ac felis donec et odio pellentesque. Molestie at elementum eu facilisis sed. In hendrerit gravida rutrum quisque. Turpis nunc eget lorem dolor sed viverra ipsum nunc aliquet. Urna et pharetra pharetra massa massa ultricies mi quis hendrerit. Odio aenean sed adipiscing diam donec adipiscing tristique risus. Adipiscing elit ut aliquam purus sit amet. Sem viverra aliquet eget sit amet tellus. Neque aliquam vestibulum morbi blandit cursus risus. Gravida rutrum quisque non tellus orci ac auctor augue mauris. Sapien et ligula ullamcorper malesuada proin libero nunc consequat. Arcu felis bibendum ut tristique et.

Orci sagittis eu volutpat odio facilisis. Ut enim blandit volutpat maecenas. Nunc faucibus a pellentesque sit. Faucibus et molestie ac feugiat. Lorem mollis aliquam ut porttitor leo a diam sollicitudin. Enim eu turpis egestas pretium aenean pharetra magna ac. Eu tincidunt tortor aliquam nulla facilisi cras. Amet consectetur adipiscing elit ut aliquam. Quam nulla porttitor massa id neque aliquam vestibulum morbi. Nisl condimentum id venenatis a condimentum. Mauris rhoncus aenean vel elit scelerisque mauris pellentesque. Enim nunc faucibus a pellentesque sit amet porttitor eget. Amet consectetur adipiscing elit pellentesque habitant morbi tristique senectus et. Vitae turpis massa sed elementum tempus egestas sed sed. Diam maecenas sed enim ut sem viverra aliquet eget sit. Vitae congue eu consequat ac felis donec et odio. Fermentum leo vel orci porta non pulvinar neque laoreet suspendisse. Egestas integer eget aliquet nibh praesent tristique magna sit.

Curabitur vitae nunc sed velit dignissim sodales ut eu sem. Porttitor rhoncus dolor purus non enim praesent. Auctor augue mauris augue neque gravida in fermentum et. Neque viverra justo nec ultrices. Sit amet justo donec enim diam. Sit amet massa vitae tortor condimentum lacinia quis. Nulla aliquet porttitor lacus luctus. Erat pellentesque adipiscing commodo elit at imperdiet. Enim tortor at auctor urna nunc id cursus metus aliquam. Nullam vehicula ipsum a arcu cursus vitae congue mauris. Eget nulla facilisi etiam dignissim diam. In est ante in nibh mauris. Nibh mauris cursus mattis molestie a iaculis at erat pellentesque. Egestas tellus rutrum tellus pellentesque eu tincidunt tortor. Placerat vestibulum lectus mauris ultrices eros in cursus. Ultrices in iaculis nunc sed augue lacus viverra.
      </p>
    </>
  )
}
