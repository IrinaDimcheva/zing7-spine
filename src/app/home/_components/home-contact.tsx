import Contact from '@/components/layout/contact';

const contact = {
  name: 'Spine',
  address: 'Plovdiv, K. Riacho 95, Bulgaria',
  phone: '+359 884 77 77 777',
  email: 'j.borisov@spine.com',
  placeholders: {
    email: 'company@gmail.com',
    phone: '+359 000 000 000',
  },
};

export default function HomeContact() {
  return (
    <div>
      <Contact {...contact} />
    </div>
  );
}
