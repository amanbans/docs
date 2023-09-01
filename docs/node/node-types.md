---
id: node-types
title: Types of Nodes
sidebar_label: Types of Nodes
sidebar_position: 1
description: Learn about the type of nodes in avail project
keywords:
  - docs
  - avail
  - node
  - data availability
  - da
image: https://availproject.github.io/img/avail/AvailDocs.png
slug: node-types
---
import useBaseUrl from '@docusaurus/useBaseUrl';

## Overview

Blockchains are distributed ledgers that store transactional data
across a network of nodes. Although Avail is not the traditional
monolithic blockchains and is a modular blockchain solution optimized
for data availability, it still has different types of nodes. Each
node type has a different level of participation in the avail network,
and different requirements in terms of storage and bandwidth.

The most important kinds of nodes you will likely set up are:

### Light Clients

Light nodes are a type of nodes that allows users to interact with the
blockchain network without having to download and store the entire
blockchain history. Instead, light nodes rely on a set of trusted
nodes, called a light client infrastructure, to provide them with the
necessary data to interact with the network.

### Full Nodes

Full nodes store the current state of the blockchain, including the
current block and transaction data. This node type is designed to
quickly and efficiently access the current state of the blockchain,
but they do not store the entire transaction history. Full nodes are
optimized for fast, efficient access to current blockchain data. They
are designed to be lightweight and responsive, making them well-suited
for tasks like verifying transactions and broadcasting new blocks.

### Validator Nodes

Validators are full nodes that also have a staked amount on the chain,
and are responsible for producing blocks and validating that the chain
is functioning correctly.

## Notable Node Variants

### Archive Nodes

Archive nodes store the entire transaction history of the blockchain,
including all previous blocks and transactions. This makes archive
nodes much larger in terms of storage requirements. Can provide access
to historical data, including previous versions of the blockchain
state. This makes this type of node useful for auditing and compliance
purposes, as well as for analyzing blockchain activity over
time.Archive nodes, on the other hand, are more resource-intensive and
require more powerful hardware to operate efficiently. They may be
slower and less responsive than full nodes, especially when accessing
historical data. Their primary focus is on data storage and historical
data access.

### Pruned Nodes

A pruned node refers to a type of node configuration where certain
historical data is removed or pruned from Avails storage, reducing the
disk space requirements while maintaining the ability to participate
in the network.  When a Avail node operates as a pruned node, it
retains only the most recent state of Avail network and discards or
removes older historical data, such as past blocks and
transactions. The pruning process allows the node to save disk space
by selectively discarding data that is no longer needed for the
current state verification or network consensus.

### RPC Nodes

An RPC (Remote Procedure Call) node refers to a node that exposes an
API (Application Programming Interface) for remote interaction with
the Avail network. It allows external clients, such as applications or
other nodes, to send requests and receive responses from the Avail
network.

The RPC node serves as a gateway for developers and users to interact
with the Avail network without the need to run a full node locally.

### Bootstrap Nodes

This type of node, a bootstrapping node, is also known as a rendezvous 
host. Widely known as a Boot Node, or a Bootstrap Node. New nodes in a 
p2p network often make their initial connection to these sets of nodes. 

Bootstrap node in an overlay network then provides initial configuration 
information to newly joining nodes so that they may successfully join the 
p2p network. Bootstrapping exist in overlay networks [peer-to-peer (P2P)] 
because of the dynamically changing identities and configurations of member 
nodes in  these networks.

After a Boot node had served it purpose as an entry point to the network,
and had provided a list of other nodes in the network to the newcomers,
new nodes will no longer rely on them.

### Relay Nodes

There will certainly be situations where means of establishing a direct 
communication between peers is unfeasible. These situations require the 
assistance of a third peer willing and able to act as an intermediary.

In real-world peer-to-peer networks, direct communication between all its
peers may practically be impossible, and suffers from variety of reasons.
Even if assume that everyone on the network has the same common transport
mechanism, one or more peers may be behind a firewall, or some has NAT
traversal issues.

This gaping communication chasm is possible to bridge, so long as each
of peers is capable of establishing a connection to a willing Relay peer.
And our pal, the Relay peer, will try to directly connect our problematic
peers, or still provide a circuit relayed connection in cases of pesky
Symmetric NAT cases. Either way, the Relay node is a great ally in trying
to minimize snags in p2p network connectivity.