import { useState } from "react";

function UserPreferences() {
  const [preferences, setPreferences] = useState({
    theme: "light",
    notifications: true,
    language: "en",
    fontSize: "medium",
  });

  const updatePreference = (key, value) => {
    setPreferences({
      ...preferences,
      [key]: value,
    });
  };

  return (
    <div>
      <div>
        <label>
          Theme:
          <select
            value={preferences.theme}
            onChange={(e) => updatePreference("theme", e.target.value)}
          >
            <option>light</option>
            <option>dark</option>
          </select>
        </label>
      </div>

      <div>
        <label>
          <input
            type="checkbox"
            checked={preferences.notifications}
            onChange={(e) =>
              updatePreference("notifications", e.target.checked)
            }
          />
          Enable notifications
        </label>
      </div>

      <div>
        <label>
          Language:
          <select
            value={preferences.language}
            onChange={(e) => updatePreference("language", e.target.value)}
          >
            <option value="en">English</option>
            <option value="es">Spanish</option>
            <option value="fr">French</option>
          </select>
        </label>
      </div>

      <pre>{JSON.stringify(preferences, null, 2)}</pre>
    </div>
  );
}

export default UserPreferences;
