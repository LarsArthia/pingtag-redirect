export async function getServerSideProps(context) {
  const { tag_id } = context.query;

  if (!tag_id) {
    return {
      notFound: true,
    };
  }

  return {
    redirect: {
      destination: `https://hook.eu2.make.com/8w1ip25tfi16tfvlxpd4ak416u3mb2l3?tag_id=${tag_id}`,
      permanent: false,
    },
  };
}

export default function PingRedirect() {
  return null;
}
