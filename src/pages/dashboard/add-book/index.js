import DropzoneImage from "@/components/DropzoneImage";
import Layout from "@/components/Layout";
import React from "react";
import Select from "react-select";

const AddBook = () => {
  const [image, setImage] = React.useState(null);
  return (
    <Layout>
      <div className="m-5 ps-5 w-[100%] relative">
        <div className="w-[100%] mb-5 bg-gray-300 p-2 rounded-md shadow-sm">
          <h1 className="text-lg font-bold">Add Book</h1>
        </div>
        <div className="w-[100%]">
          <form
            className="flex flex-col justify-center items-start w-[100%]"
            onSubmit=""
          >
            <div className="w-[100%] grid grid-cols-2 items-center">
              <div className="w-[100%] flex flex-col items-start">
                <label className="text-base font-medium">Cover</label>
                {/* <input type="file" /> */}
                {/* Show selected image preview here */}
                {/* <img src="" alt="" /> */}
                <div className="w-[100%] ps-[1rem] pe-[2rem] mt-2 mb-5">
                  <DropzoneImage setImage={setImage} image={image} />
                </div>
              </div>
              <div>
                {/* show accepted image preview here */}
                {image && (
                  <div className="w-[40%] h-[40%] mt-3 mb-5 flex justify-start items-center relative">
                    <img
                      className="w-[100%] h-[100%]"
                      src={URL.createObjectURL(image)}
                      alt=""
                    />
                    <i
                      class="ri-close-line cursor-pointer text-red-600 bg-red-200 absolute top-0 right-0 rounded-full"
                      onClick={() => setImage(null)}
                    ></i>
                  </div>
                )}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-5">
              <div>
                <label>
                  Title<span>*</span>
                </label>
                <input type="text" />
              </div>
              <div>
                <label>Description</label>
                <textarea></textarea>
              </div>
            </div>
            <div>
              <div>
                <label>
                  Author<span>*</span>
                </label>
                <Select
                  value={null}
                  options={[]}
                  // onChange={handleChange}
                />
              </div>
              <div>
                <label>Translator</label>
                <Select
                  value={null}
                  options={[]}
                  // onChange={handleChange}
                />
              </div>
            </div>
            <div>
              <div>
                <label>Owner</label>
                <Select
                  value={null}
                  options={[]}
                  // onChange={handleChange}
                />
              </div>
              <div>
                <label>Present State</label>
                <Select
                  value={null}
                  options={[]}
                  // onChange={handleChange}
                />
              </div>
            </div>
            <div>
              <div>
                <label>
                  Language<span>*</span>
                </label>
                <input type="text" />
              </div>
              <div>
                <label>
                  Condition <span>*</span>
                </label>
                <Select
                  value={null}
                  options={[]}
                  // onChange={handleChange}
                />
              </div>
            </div>
            <div>
              <div>
                <label>Genre</label>
                <Select
                  value={null}
                  options={[]}
                  // onChange={handleChange}
                />
              </div>
              <div>
                <label>Price</label>
                <input type="number" />
              </div>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default AddBook;
