import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const Forms = () => {
  const { t } = useTranslation(["contact"]);

  return (
    <div className="pb-24">
      <div className="container flex justify-center items-center">
        <form
          target="_blank"
          action="https://formsubmit.co/your@email.com"
          method="POST"
        >
          <div className="form-group">
            <div className="form-row flex gap-6">
              <div className="col">
                <input
                  type="text"
                  name="name"
                  className="form-control p-3 border-2 border-coyote/40 rounded-xl"
                  placeholder={t("forms.name")}
                  required
                />
              </div>
              <div className="col">
                <input
                  type="email"
                  name="email"
                  className="form-control p-3 border-2 border-coyote/40 rounded-xl"
                  placeholder={t("forms.email")}
                  required
                />
              </div>
            </div>
          </div>
          <div className="form-group">
            <textarea
              placeholder={t("forms.message")}
              className="form-control p-3 border-2 border-coyote/40 rounded-xl w-full mt-6"
              name="message"
              rows="5"
              required
            ></textarea>
          </div>
          <div className="flex justify-end mt-4">
            <Link
              className="btn btn-lg btn-dark btn-block bg-coyote text-alabaster rounded-4xl text-xl px-6 py-3 w-fit"
              type="submit"
            >
              {t("forms.submit")}
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Forms;
