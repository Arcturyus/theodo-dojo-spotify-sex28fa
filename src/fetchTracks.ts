const apiToken =
  'BQCxy0T844od8Ide4Q2FOPtGB_vctMAthX2m4SH7SFo2qm0TXLCDZcIF1wjitY6oOO5JhBj6qmIV-NaGAG7MRJo6N0FGg9xxVQVA7bncJmeSoHABjBitSxfoGa6y2yBeFXx3Jw-YOxsD5yxircu5_C1IQi2-LaeY4gd2sh219E0-pLkUTvNzEqxa0p_MSNanD3fCDMmW8vp_yYNVVpR62w';
import { SavedTrack } from 'spotify-types';

export const fetchTracks = async () => {
  const response = await fetch('https://api.spotify.com/v1/me/tracks', {
    method: 'GET',
    headers: {
      Authorization: 'Bearer ' + apiToken,
    },
  });
  if (!response.ok) {
    throw new Error(`Fetching tracks failed with status ${response.status}`);
  }
  const data = (await response.json()) as { items: SavedTrack[] };

  return data.items;
};
