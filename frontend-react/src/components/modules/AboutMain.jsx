import React from 'react'

export function AboutMain() {

  const categories = [
    { name: 'Roupas Masculinas', image: 'https://images.pexels.com/photos/298863/pexels-photo-298863.jpeg?auto=compress&cs=tinysrgb&w=600' },
    { name: 'Roupas Femininas', image: 'https://images.pexels.com/photos/7679720/pexels-photo-7679720.jpeg?auto=compress&cs=tinysrgb&w=600' },
    { name: 'Jóias', image: 'https://images.pexels.com/photos/1927259/pexels-photo-1927259.jpeg?auto=compress&cs=tinysrgb&w=600' },
    { name: 'Eletrônicos', image: 'https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg?auto=compress&cs=tinysrgb&w=600' },
  ]

  return (
    <main className="p-5 flex flex-col gap-10 md:pt-32">
      <h1 className='text-4xl font-semibold text-black/80 w-full text-center p-2.5 border-b-[1px] border-b-black/30'>Sobre nós</h1>
      <p className='text-center text-xl font-thin'>
        Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos,
        e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja
        de tipos e os embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum sobreviveu não só
        a cinco séculos, como também ao salto para a editoração eletrônica, permanecendo essencialmente inalterado.
        Se popularizou na década de 60, quando a Letraset lançou decalques contendo passagens de Lorem Ipsum,
        e mais recentemente quando passou a ser integrado a softwares de editoração eletrônica como Aldus PageMaker.
      </p>

      <h2 className='text-3xl font-semibold w-full text-center text-black/80'>Nossos produtos</h2>
      <div className='flex gap-5 flex-wrap justify-center items-center'>
        {
          categories.map((category, index) => (
            <section key={index} className='w-72 aspect-video flex flex-col rounded ring-[1px] ring-black/30'>
              <img src={category.image} alt={category.name} className='w-full rounded-t' />
              <h3 className='text-xl font-semibold text-black/80 text-center p-2.5'>{category.name}</h3>
            </section>
          ))
        }
      </div>
    </main>
  )
}
