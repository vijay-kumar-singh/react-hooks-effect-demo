import React, { useState, useEffect } from "react";

const initialProfile = {
  avatar_url: null,
  url: null,
  follower: null,
  public_repos: null
};

export default function Profile() {
  const [profile, setProfile] = useState(initialProfile);
  const [loading, setLoading] = useState(false);

  const getProfile = async () => {
    setLoading(true);
    try {
      const response = await fetch("https://api.github.com/users/vijay-kumar-singh");
      const json = await response.json();

      setLoading(false);
      if (json && json.url) {
        setProfile({
          avatar_url: json.avatar_url,
          url: json.url,
          followers: json.followers,
          public_repos: json.public_repos
        });
      }
    } catch (error) {
      setLoading(false);
    }
  };

  useEffect(() => {
      getProfile();
  },[]);

  return (
    <div>
      <div>
        {loading ? (
          <div>Loading....</div>
        ) : (
          <ul>
            <img src={profile.avatar_url} alt="Avatar" class="avatar"></img>
            <li>url: {profile.url}</li>
            <li>follower: {profile.followers}</li>
            <li>Repo:{profile.public_repos}</li>
          </ul>
        )}
      </div>
    </div>
  );
}