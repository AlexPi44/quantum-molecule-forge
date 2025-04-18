
# 🌌 Quantum Molecule Forge

Quantum Molecule Forge is a futuristic AI-powered platform for molecular generation, visualization, and NFT minting.

## 🚀 Features

- 🔬 AI-Generated Molecules (via simulated ML + ChemBERTa logic)
- 💠 Glowing entangled visuals using Three.js shaders
- 🌀 Orbiting electron cloud shells
- 📦 .glb 3D molecule export
- 🧠 ChemBERTa property prediction (toxicity, solubility, etc.)
- 🔗 NFT minting on Ethereum (via Sepolia testnet)
- 🧬 Evolutionary AI for molecule mutation

---

## 🛠 Setup Instructions

### 1. Clone & Install

```bash
cd QuantumMoleculeForge
npm install
```

### 2. Run the App

```bash
npm run dev
```

Go to `http://localhost:5173` in your browser.

### 3. Build for Production

```bash
npm run build
npm run preview
```

---

## 🌍 NFT Minting Instructions

1. **Deploy the Smart Contract**
   - Go to [Remix](https://remix.ethereum.org)
   - Paste contents of `contracts/MoleculeNFT.sol`
   - Compile with Solidity 0.8+
   - Deploy using Sepolia testnet in MetaMask
   - Get test ETH at: https://sepoliafaucet.com
   - Copy the deployed contract address

2. **Update Contract Address**
   - Open `src/blockchain.js`
   - Replace `CONTRACT_ADDRESS` with your deployed contract address

3. **Mint an NFT**
   - Click “Mint as NFT” in the app after generating a molecule
   - Approve MetaMask transaction

---

## 📦 Export Molecule as .glb
Click the **"Export .glb"** button in the bottom right of the app.

---

## ✅ Tech Stack

- Vite + React + Tailwind
- Three.js + react-three-fiber + drei
- TensorFlow.js + Transformers.js (ChemBERTa)
- Ethers.js (Ethereum interactions)

---

## 🧬 Evolutionary Molecules
Click the **"Evolve Molecule"** button to generate optimized molecular designs.

---

## 👨‍🔬 Credits

Made with code, atoms, and cosmic ambition. Perfect for research, art, NFTs, and discovery.

