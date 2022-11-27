import PocketBase from "pocketbase";

export async function connect() {
  const pb = new PocketBase("https://pocketbase.theflinners.com");

  const adminData = await pb.admins.authWithPassword("email", "password");
  return pb;
}

export async function getChatters() {
  return connect().then(async (pb) => {
    const chatters = await pb.collection("chatter").getList(1, 50);
    return chatters.items;
  });
}

export async function updateTenant({ tenant }) {
  return connect().then(async (pb) => {
    const data = {
      id: tenant.id,
      username: tenant.username,
      url: "https://blah.com",
    };
    const record = await pb.collection("tenant").update(tenant.id, data);

    return tenant;
  });
}

export async function addTenant({ tenant }) {
  return connect().then(async (pb) => {
    const data = {
      id: tenant.id,
      username: tenant.username,
      url: "https://blah.com",
    };
    const record = await pb.collection("tenant").create(data);

    return record;
  });
}
