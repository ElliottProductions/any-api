-- Use this file to define your SQL tables
-- The SQL in this file will be executed when you run `npm run setup-db`

DROP table if exists cats;

CREATE table cats (
  id BIGINT GENERATED ALWAYS AS IDENTITY,
  name VARCHAR NOT NULL,
  type VARCHAR NOT NULL,
  url VARCHAR,
  distance_from_sun INT NOT NULL,
  orbital_period_in_days INT NOT NULL);

INSERT INTO cats (name, type, url, distance_from_sun, orbital_period_in_days) VALUES 
('Mercury','terrestrial', 'https://cdn.mos.cms.futurecdn.net/PFQ97KNjjTebMzenT3GeKd-1200-80.jpg', 41.227, 88),
('Venus','terrestrial', 'https://cdn.mos.cms.futurecdn.net/RifjtkFLBEFgzkZqWEh69P.jpg', 67.24, 225),
('Earth','terrestrial', 'https://www.universetoday.com/wp-content/uploads/2009/09/bluemarble.jpg', 92.96, 365),
('Mars','terrestrial','https://cdn.mos.cms.futurecdn.net/L868HCTDT8ueAXXrcyXoWc.jpg', 141.6, 687),
('Jupiter','gas giant', 'https://cdn.mos.cms.futurecdn.net/yyonzpUYYkQNX8corCxeyD.jpeg', 483.8, 4380),
('Saturn','gas giant', 'https://upload.wikimedia.org/wikipedia/commons/c/c7/Saturn_during_Equinox.jpg', 890.8, 9490),
('Uranus','ice giant', 'https://upload.wikimedia.org/wikipedia/commons/4/48/Uranus_as_seen_by_NASA%27s_Voyager_2_%28remastered%29.png', 1784, 30660),
('Neptune','ice giant', 'https://cdn.mos.cms.futurecdn.net/NrpYyu3sEmB5pcry9rWMk8.jpg', 2793, 60225)