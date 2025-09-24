"use client";

import React, { useState } from "react";
import { Tabs } from "antd";
import type { TabsProps } from "antd";
import { motion, AnimatePresence } from "framer-motion";
import "./index.css"; 

const lorem1 =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tristique, eros sed semper egestas, nunc risus viverra purus, in aliquet orci magna at ligula. Donec dictum augue ut lectus congue, a gravida nulla condimentum. Pellentesque id felis ac urna pretium ultrices. Integer non ante ligula. Vivamus vel ipsum id eros euismod dictum. Cras congue malesuada ante, ac malesuada nulla commodo eget. Curabitur quis orci sit amet nulla feugiat sollicitudin. Mauris malesuada venenatis dui vel eleifend. Suspendisse eget felis nec risus tincidunt hendrerit. Nulla sed tempor magna, sed pretium erat. Aenean luctus lacus nec mauris pharetra, eu vehicula lacus porttitor. Proin sed sem at nulla mattis suscipit non a erat. Sed eget justo in urna porta ultrices. Suspendisse potenti. Ut eget ipsum risus. Nam vel lacus at erat tincidunt varius at a eros. Aliquam in velit vitae nunc pretium dictum nec non libero.";

const lorem2 =
  "Phasellus imperdiet, nulla et dictum interdum, nisi lorem egestas odio, vitae scelerisque enim ligula venenatis dolor. Maecenas nisl est, ultrices nec congue eget, auctor vitae massa. Fusce luctus vestibulum augue ut aliquet. Mauris ante ligula, facilisis sed ornare eu, lobortis in odio. Praesent convallis urna a lacus interdum ut hendrerit risus congue. Nunc sagittis dictum nisi, sed ullamcorper ipsum dignissim ac. In at libero sed nunc venenatis imperdiet sed ornare turpis. Donec vitae dui eget tellus gravida venenatis. Integer fringilla congue eros non fermentum. Sed dapibus pulvinar nibh tempor porta. Cras ac leo purus. Mauris quis diam velit.";

const lorem3 =
  "Curabitur euismod sem vel vulputate convallis. Vestibulum ut ligula eu libero laoreet commodo. In sit amet pulvinar magna. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed euismod, arcu sit amet posuere malesuada, lorem ligula laoreet purus, a fringilla massa nulla at ligula. Vivamus feugiat, magna a scelerisque malesuada, eros lectus facilisis nisl, eget condimentum sem sapien id odio. Pellentesque vitae nulla at enim pharetra ultricies. Ut dignissim turpis vitae tristique tincidunt. Proin luctus nunc sit amet justo pharetra, nec aliquet nisl tristique. Integer consequat, purus id dapibus congue, sapien metus posuere orci, at volutpat nunc libero sed mi. Aenean egestas, sapien ut luctus pulvinar, nulla elit dictum libero, ac hendrerit nunc mauris nec nisl.";

const AnimatedTabs: React.FC = () => {
  const [activeKey, setActiveKey] = useState("1");

  const items: TabsProps["items"] = [
    {
      key: "1",
      label: "Product description",
      children: (
        <motion.div
          key="tab1"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.4 }}
          className="py-6 px-15 bg-white"
        >
          <p className="text-[#666666] text-[16px] leading-7">{lorem1}</p>
        </motion.div>
      ),
    },
    {
      key: "2",
      label: "Shipping & returns",
      children: (
        <motion.div
          key="tab2"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.4 }}
          className="py-6 px-15 bg-white"
        >
          <p className="text-[#666666] text-[16px] leading-7">{lorem2}</p>
        </motion.div>
      ),
    },
    {
      key: "3",
      label: "Review",
      children: (
        <motion.div
          key="tab3"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.4 }}
          className="py-6 px-15 bg-white"
        >
          <p className="text-[#666666] text-[16px] leading-7">{lorem3}</p>
        </motion.div>
      ),
    },
  ];

  return (
    <div className="w-full  bg-[#F7F7F7] mb-30 mt-10 flex items-center justify-center py-10">
      <div className="w-full container">
        <Tabs
          activeKey={activeKey}
          onChange={(key) => setActiveKey(key)}
          centered
          items={items.map((item) => ({
            ...item,
            children: (
              <AnimatePresence mode="wait">
                {item.key === activeKey && item.children}
              </AnimatePresence>
            ),
          }))}
          className="custom-tabs" 
        />
      </div>
    </div>
  );
};

export default AnimatedTabs;
