import { useState } from "react";
import { useImmer } from "use-immer";

export default function MixinForm() {
  const [person, setPerson] = useState({
    firstName: "Barbara",
    lastName: "Hepworth",
    email: "bhepworth@sculpture.com",
  });

  const [artist, setArtist] = useImmer({
    name: "Barbara Hepworth",
    artwork: {
      title: "Pelagos",
      city: "London",
    },
  });

  function handlePersonChange(e) {
    setPerson({
      ...person,
      [e.target.name]: e.target.value,
    });
  }

  function handleArtistChange(e) {
    console.log(e);
    setArtist((draft) => {
        if(e.target.dataset.parent){
            draft[e.target.dataset.parent][e.target.name] = e.target.value;
        }else{
            draft[e.target.name] = e.target.value;
        }
    });
  }

  return (
    <div>
      <h1>update person by useState</h1>
      <label>
        First name:
        <input name="firstName" value={person.firstName} onChange={handlePersonChange} />
      </label>
      <label>
        Last name:
        <input name="lastName" value={person.lastName} onChange={handlePersonChange} />
      </label>
      <label>
        Email:
        <input name="email" value={person.email} onChange={handlePersonChange} />
      </label>
      <p>
        {person.firstName} {person.lastName} ({person.email})
      </p>

    <br />
      <h1>update artist by useImmer</h1>
      <label>
        Name:
        <input name="name" data-parent="" value={artist.name} onChange={handleArtistChange} />
      </label>
      <label>
        Title:
        <input name="title" data-parent="artwork" value={artist.artwork.title} onChange={handleArtistChange} />
      </label>
      <label>
        City:
        <input name="city" data-parent="artwork" value={artist.artwork.city} onChange={handleArtistChange} />
      </label>

      <p>
        <i>{artist.artwork.title}</i>
        {" by "}
        {artist.name}
        <br />
        (located in {artist.artwork.city})
      </p>
    </div>
  );
}

/**
 * 1、始终认为state是只读的，不要直接修改state，而是要使用setState
 * 2、更新object类型的state，有两种方式：
 * 方式1：要先复制一份，再修改
 * 方式2：使用use-immer
 */
