import { createClient } from 'contentful';

export const contentfulClient = createClient({
  space: import.meta.env.VITE_CONTENTFUL_SPACE_ID,
  accessToken: import.meta.env.VITE_CONTENTFUL_ACCESS_TOKEN,
});

export const fetchEvents = async () => {
  const response = await contentfulClient.getEntries({ content_type: 'event' });
  return response.items.map(item => ({
    id: item.sys.id,
    title: item.fields.title,
    date: new Date(item.fields.tanggal).toLocaleDateString('id-ID', { year: 'numeric', month: 'long', day: 'numeric' }),
    duration: `${item.fields.durasi}`,
    image: item.fields.image.fields.file.url,
    link: item.fields.link,
    category: item.fields.tag
  }));
};