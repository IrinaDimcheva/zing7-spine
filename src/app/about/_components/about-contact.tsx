import Contact from '@/components/layout/contact';

const contact = {
  name: 'DigitalBoostPro',
  address: 'Old Port Mouseio, Mykonos, Greece',
  phone: '+10 (239) 555-0108',
  email: 'jessica.hanson@example.com',
  placeholders: {
    email: 'b*************.com',
    phone: '+1(480) 555-0103',
  },
};

export default function AboutContact() {
  return (
    <div>
      <Contact {...contact} />
    </div>
  );
}
