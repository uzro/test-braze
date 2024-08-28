export const metadata = {
  title: "Set User - Test Braze",
};

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-20">
      <div>
        <h1 className="font-semibold text-2xl mb-10">Set User</h1>

        <form action="/submit_user_registration" method="post" id="user_form">
          <label for="user_id">ユーザーID:</label>
          <input type="text" id="user_id" name="user_id" />
          <br />
          <label for="first_name">First Name:</label>
          <input type="text" id="first_name" name="first_name" />
          <br />
          <label for="last_name">Last Name:</label>
          <input type="text" id="last_name" name="last_name" />
          <br />
          <label for="rank">Rank:</label>
          <input type="text" id="rank" name="rank" />
          <br />
          <label for="email">メールアドレス:</label>
          <input type="email" id="email" name="email" />
          <br />
        </form>
        <button onclick="handleSubmit()">ユーザー登録</button>
      </div>
    </main>
  );
}
